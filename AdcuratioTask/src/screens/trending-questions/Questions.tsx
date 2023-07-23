import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React, {Fragment, memo, useEffect, useState} from 'react';
import Colors from '../../resources/Colors';
import {QuestionsRedux} from '../../redux/questions-redux/QuestionsRedux';
import {useDispatch, useSelector} from 'react-redux';
import SnackBar from '../../components/snack-bar/SnackBar';
import MediaAssets from '../../../assets';
import styles from './Questions.Style';

const Questions = props => {
  const {route} = props;
  const actionDispatch = (dispatch: any) => ({
    setQuestionsState: (data: any) =>
      dispatch(QuestionsRedux.actions.setQuestionsState(data)),
    getAllQuestionsRequest: (data: any) =>
      dispatch(QuestionsRedux.actions.getAllQuestionsRequest(data)),
  });

  const {setQuestionsState, getAllQuestionsRequest} = actionDispatch(
    useDispatch(),
  );
  const [isEndReached, setIsEndReached] = useState(false);
  const {questionsData, isLoading, errorMessage, isEndLoading} = useSelector(
    (state: any) => ({
      questionsData: state?.QuestionsRedux?.questionsData,
      isLoading: state?.QuestionsRedux?.isLoading,
      errorMessage: state?.QuestionsRedux?.errorMessage,
      isEndLoading: state?.QuestionsRedux?.isEndReached,
    }),
  );
  useEffect(() => {
    fetchQuestions(false);
  }, []);

  useEffect(() => {
    if (isEndReached) {
      fetchQuestions(true);
    }
  }, [questionsData, isEndReached]);

  const fetchQuestions = async endReached => {
    let data = {
      name: route.name,
      pageNo: questionsData[route.name] ? questionsData[route.name]?.pageNo : 1,
      endReached: endReached,
    };
    await getAllQuestionsRequest(data);
    setIsEndReached(false);
  };

  const onEndReached = () => {
    let stackOverFlowQuestions = {
      ...questionsData,
      [route.name]: {
        ...questionsData[route.name],
        pageNo: questionsData[route.name].pageNo + 1,
      },
    };
    setQuestionsState({
      key: 'questionsData',
      value: stackOverFlowQuestions,
    });
    setIsEndReached(true);
  };

  const renderFooter = () => {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(item.link);
        }}
        style={styles.questionsListItem}>
        <Text style={styles.questionNumber}>{index + 1}</Text>
        <Text style={styles.question}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SnackBar
        showSnackBar={errorMessage ? true : false}
        message={errorMessage}
        color={Colors.quaternaryThemeColor}
        textColor={Colors.reddishPinkColor}
        source={MediaAssets.ic_errormark}
        removeErrorState={() => {
          setQuestionsState({
            key: 'errorMessage',
            value: '',
          });
        }}
      />
      {isLoading && !isEndReached ? (
        renderFooter()
      ) : (
        <Fragment>
          <Text style={styles.screenName}>{route?.name}</Text>
          <FlatList
            style={styles.questionsListStyle}
            data={questionsData[route.name]?.items}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={async () => {
              onEndReached();
            }}
            ListFooterComponent={isEndLoading ? renderFooter : null}
            removeClippedSubviews={true}
          />
        </Fragment>
      )}
    </View>
  );
};

export default memo(Questions);

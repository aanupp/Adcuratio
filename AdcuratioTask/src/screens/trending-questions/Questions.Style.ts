import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../resources/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlueMagentaColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenName: {
    fontSize: 20,
    color: Colors.reddishPinkColor,
    marginTop: 10,
    fontFamily: 'Arial',
  },
  questionsListStyle: {marginVertical: 10},
  questionsListItem: {
    width: Dimensions.get('window').width - 20,
    minHeight: 10,
    backgroundColor: Colors.darkBlueMagentaColor,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    flex: 1,
    borderColor: Colors.PrimusGreyColor,
    borderWidth: 1,
  },
  questionNumber: {
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.whiteColor,
    marginHorizontal: 10,
  },
  question: {
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.whiteColor,
    flex: 1,
  },
  activityIndicatorContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;

import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goaltitle => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goaltitle}]);
  };

  return (
    <View style={styles.screen}>
      
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
      keyExtractor= {(item, index) => item.id}
      data={courseGoals}
      renderItem={itemData => <GoalItem onDelete={() => console.log('It is working')} title={itemData.item.value} />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },  
});

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MenuScreen = () => {
  const days = {
    "Monday": {
      "Breakfast": ["Poha", "Sev / Namkeen", "Boiled Sweet Corn", "Omelette", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Lemon Rice", "Plain Rice", "Moong Dal", "Rasam", "Torai Chana Dry", "Chole Masala", "Plain Roti / Fulka Roti", "Buttermilk", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Vada Pav", "Green Chutney & Dry Red Chutney", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Plain Rice", "Mix Dal", "Black Channa Masala Dry", "Aloo Rasewalla", "Poori", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Kheer"]
    },
    "Tuesday": {
      "Breakfast": ["Upma / Sheera", "Coconut Chutney", "Boiled Peanuts", "Boiled Egg", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Onion Fried Rice", "Plain Rice", "Arhar Dal", "Sambhar", "Moong Masala Dry", "Gobi Mutter Rasewalla", "Plain Roti / Butter Roti", "Buttermilk", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Dahi Wada", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Corn Rice", "Plain Rice", "Moong Dal", "Paneer Kohlapuri", "Plain Roti / Fulka Roti", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Gulab Jamun"]
    },
    "Wednesday": {
      "Breakfast": ["Poha", "Sev / Namkeen", "Boiled Sweet Corn", "Omelette", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Lemon Rice", "Plain Rice", "Moong Dal", "Rasam", "Torai Chana Dry", "Chole Masala", "Plain Roti / Fulka Roti", "Buttermilk", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Vada Pav", "Green Chutney & Dry Red Chutney", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Plain Rice", "Mix Dal", "Black Channa Masala Dry", "Aloo Rasewalla", "Poori", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Kheer"]
    },
    "Thursday": {
      "Breakfast": ["Poha", "Sev / Namkeen", "Boiled Sweet Corn", "Omelette", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Lemon Rice", "Plain Rice", "Moong Dal", "Rasam", "Torai Chana Dry", "Chole Masala", "Plain Roti / Fulka Roti", "Buttermilk", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Vada Pav", "Green Chutney & Dry Red Chutney", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Plain Rice", "Mix Dal", "Black Channa Masala Dry", "Aloo Rasewalla", "Poori", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Kheer"]
    },
    "Friday": {
      "Breakfast": ["Poha", "Sev / Namkeen", "Boiled Sweet Corn", "Omelette", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Lemon Rice", "Plain Rice", "Moong Dal", "Rasam", "Torai Chana Dry", "Chole Masala", "Plain Roti / Fulka Roti", "Buttermilk", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Vada Pav", "Green Chutney & Dry Red Chutney", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Plain Rice", "Mix Dal", "Black Channa Masala Dry", "Aloo Rasewalla", "Poori", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Kheer"]
    },
    "Saturday": {
      "Breakfast": ["Poha", "Sev / Namkeen", "Boiled Sweet Corn", "Omelette", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Lemon Rice", "Plain Rice", "Moong Dal", "Rasam", "Torai Chana Dry", "Chole Masala", "Plain Roti / Fulka Roti", "Buttermilk", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Vada Pav", "Green Chutney & Dry Red Chutney", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Plain Rice", "Mix Dal", "Black Channa Masala Dry", "Aloo Rasewalla", "Poori", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Kheer"]
    },
    "Sunday": {
      "Breakfast": ["Poha", "Sev / Namkeen", "Boiled Sweet Corn", "Omelette", "Banana", "Corn Flakes", "BBJ / Pickle", "Coffee / Bournvita / Milk"],
      "Lunch": ["Lemon Rice", "Plain Rice", "Moong Dal", "Rasam", "Torai Chana Dry", "Chole Masala", "Plain Roti / Fulka Roti", "Buttermilk", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle"],
      "Snacks": ["Vada Pav", "Green Chutney & Dry Red Chutney", "Banana", "BBJ / Tea / Coffee"],
      "Dinner": ["Plain Rice", "Mix Dal", "Black Channa Masala Dry", "Aloo Rasewalla", "Poori", "Green Chilli / Lemon Slices", "Salad / Papad / Pickle", "Kheer"]
    }
  }
  ;

  const getCurrentDayMenu = () => {
    const currentDayIndex = new Date().getDay();
    const currentDayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDayIndex];
    console.log(currentDayName, currentDayIndex);
    return days[currentDayName];
  };

  const currentDayMenu = getCurrentDayMenu();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(currentDayMenu).map((mealType, index) => (
        <MenuDay key={index} day={mealType} meals={currentDayMenu[mealType]} />
      ))}
    </ScrollView>
  );
};

const MealItem = ({ item }) => (
  <View style={styles.mealContainer}>
    <Text style={styles.mealText}>{item}</Text>
  </View>
);

const MenuDay = ({ day, meals }) => (
  <View style={styles.dayContainer}>
    <Text style={styles.dayText}>{day}:</Text>
    {meals.map((meal, index) => (
      <MealItem key={index} item={meal} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mealContainer: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
  },
  mealText: {
    fontSize: 16,
  },
});

export default MenuScreen;

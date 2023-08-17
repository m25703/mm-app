import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  const iconData = [
    { name: 'restaurant-outline', description: 'View Menu', screen: 'Menu' },
    { name: 'chatbubble-ellipses-outline', description: 'Feedback', screen: 'Feedback' },
    { name: 'settings-outline', description: 'Settings', screen: 'SettingsScreen' },
    { name: 'notifications-outline', description: 'Notifications', screen: 'Notifications' },
  ];

  const renderIconBox = (iconName, description, screenName) => (
    <TouchableOpacity
      style={styles.iconBox}
      onPress={() => navigation.navigate(screenName)}
    >
      <Icon name={iconName} size={50} color="#4285F4" />
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );

  const renderIconGrid = () => (
    <View style={styles.iconGrid}>
      {iconData.map((data, index) => (
        <View key={index} style={styles.iconBoxContainer}>
          {renderIconBox(data.name, data.description, data.screen)}
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderIconGrid()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  iconBoxContainer: {
    width: '48%',
    marginBottom: 20,
  },
  iconBox: {
    width: '100%',
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  description: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default HomeScreen;

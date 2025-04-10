import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ExamCategory = ({ title, icon, count, onPress }) => (
  <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
    <FontAwesome5 name={icon} size={24} color="#4A90E2" />
    <View style={styles.categoryInfo}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <Text style={styles.categoryCount}>{count} Tests Available</Text>
    </View>
    <MaterialIcons name="chevron-right" size={24} color="#4A90E2" />
  </TouchableOpacity>
);

export default function HomeScreen() {
  const navigation = useNavigation();

  const categories = [
    { id: 1, title: 'GATE', icon: 'laptop-code', count: 150 },
    { id: 2, title: 'CAT', icon: 'chart-line', count: 120 },
    { id: 3, title: 'UPSC', icon: 'university', count: 200 },
    { id: 4, title: 'JEE', icon: 'atom', count: 180 },
    { id: 5, title: 'NEET', icon: 'heartbeat', count: 160 },
  ];

  return (
    <SafeAreaView style={styles.container}>      <View style={styles.header}>
        <View>          <View style={styles.brandContainer}>
            <View style={styles.smallLogo}>
              <Text style={styles.logoText}>S</Text>
            </View>
            <Text style={styles.brandText}>Solanki</Text>
          </View>
          <Text style={styles.welcomeText}>Hello, Student!</Text>
          <Text style={styles.subText}>Ready to ace your exams?</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <MaterialIcons name="account-circle" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Accuracy</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Tests Taken</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Hours Spent</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Exam Categories</Text>
        {categories.map((category) => (
          <ExamCategory
            key={category.id}
            title={category.title}
            icon={category.icon}
            count={category.count}
            onPress={() => navigation.navigate('ExamDetail', { category })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },  header: {
    padding: 20,
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  smallLogo: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#4A90E2',
  },
  brandText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  subText: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  profileButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  categoryCard: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryInfo: {
    flex: 1,
    marginLeft: 15,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryCount: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExamDetailScreen({ route, navigation }) {
  const { category } = route.params;

  const features = [
    {
      id: 1,
      title: 'Practice Questions',
      icon: 'assignment',
      description: 'Practice with topic-wise questions',
    },
    {
      id: 2,
      title: 'Mock Tests',
      icon: 'timer',
      description: 'Take full-length mock tests',
    },
    {
      id: 3,
      title: 'Study Material',
      icon: 'menu-book',
      description: 'Access comprehensive study material',
    },
    {
      id: 4,
      title: 'Previous Papers',
      icon: 'history-edu',
      description: 'Solve previous year papers',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.brandText}>Solanki</Text>
        </View>
        <Text style={styles.headerTitle}>{category.title}</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>About {category.title}</Text>
          <Text style={styles.infoText}>
            Prepare for your {category.title} exam with our comprehensive study material,
            practice questions, and mock tests. Track your progress and improve your scores.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Features</Text>
        {features.map((feature) => (
          <TouchableOpacity 
            key={feature.id} 
            style={styles.featureCard}
            onPress={() => navigation.navigate('Feature', { feature, category })}>
            <MaterialIcons name={feature.icon} size={24} color="#4A90E2" />
            <View style={styles.featureInfo}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#4A90E2" />
          </TouchableOpacity>
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
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    marginRight: 15,
  },
  brandText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.9,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
  },
  infoCard: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  featureCard: {
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
  featureInfo: {
    flex: 1,
    marginLeft: 15,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  featureDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});
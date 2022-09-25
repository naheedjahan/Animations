import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../components/Button';

const styles = StyleSheet.create({
  buttonView: {position: 'absolute', bottom: 30, alignSelf: 'center'},
  image: {height: '100%', width: '100%'},
});

const Main = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1512544783971-fb9a0691eda5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.buttonView}>
        <Button height={42} width={200} text="GETTING STARTED" />
      </View>
    </View>
  );
};

export default Main;


import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import BottomText from '../../components/BottomText';



export default function ListAccountsScreen({navigation}) {

  return (
    
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.formcontainer}>
          <BottomText 
              
              text={'Hogar'} 
              />
          <BottomText 
              
              text={'41456435215651635'} 
              />
          <BottomText 
              
              text={'CVE: 564'} 
              nameScreen={'loginScreen'}/>
        </View>
      </ScrollView>
    </View>
    
  );
}
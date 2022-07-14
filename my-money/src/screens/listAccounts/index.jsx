import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { FlatList } from 'react-native-web';

export default function ListAccountsScreen ({navigation}) {
  const [nameAccount, setnameAccount] = useState("");  
  const [numberAccount, setnumberAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [date, setDate] = useState("");
  const [accountType, setaccountType] = useState("");
  const [cve, setCve] = useState("");
  
  const sendList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://secret-garden-33326.herokuapp.com/account/list",
        { name: nameAccount, number: numberAccount, current_balance: balance, court_date: date, account_type: accountType, cve: cve }
      );
      
      console.log(response);
      setLoading(false);
    }catch (error){
      setLoading(false);
      console.error(error);
    }
  };
  return (

    <FlatList>

        <ListAccountsCard />

    </FlatList>

  );
}
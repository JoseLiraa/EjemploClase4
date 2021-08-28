import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
    const[text1,settext1]=useState('');
  const[text2,settext2]=useState('');
  const[resultadoSuma,setresultadoSuma]=useState('');
  const[resultadoRest,setresultadoRest]=useState('');
  const[resultadoMulti,setresultadoMulti]=useState('');
  const[resultadoDivi,setresultadoDivi]=useState('');

  function Sumar(var1:any,var2:any){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a+b;
    var resulSumar="El resultado de la suma es de:"+a+"+"+b+"="+c;
    setresultadoSuma(resulSumar);
  }
   function Restar(var1:any,var2:any){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a-b;
    var resulRestar="El resultado de la resta es de:"+a+"-"+b+"="+c;
    setresultadoRest(resulRestar);
  }
   function Multiplicar(var1:any,var2:any){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a*b;
    var resulMulti="El resultado de la multiplicación es de:"+a+"x"+b+"="+c;
    setresultadoMulti(resulMulti);
  }
   function Dividir(var1:any,var2:any){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a/b;
    var resulDivi="El resultado de la divisón es de:"+a+"/"+b+"="+c;
    setresultadoDivi(resulDivi);
  }

  return (
 <View style={styles.container}>
      <Text style={{padding:15, fontSize:24, backgroundColor:'orange',color:'white', textAlign:'center'}}>
        Operaciones de dos números
      </Text>
      <TextInput style={{padding:5,
      height:40,
      borderColor:'blue',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Valor 1'
      keyboardType='numeric'
      onChangeText={(text1)=>settext1(text1)}
      />
          <TextInput style={{padding:5,
      height:40,
      borderColor:'blue',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Valor 2'
      keyboardType='numeric'
      onChangeText={(text2)=>settext2(text2)}
      />
<TouchableOpacity
style={{height:60, backgroundColor:'blue', marginTop:10}}
onPress={()=>{Sumar(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  SUMAR
</Text>
</TouchableOpacity>

<TouchableOpacity
style={{height:60, backgroundColor:'blue', marginTop:10}}
onPress={()=>{Restar(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  RESTAR
</Text>
</TouchableOpacity>

<TouchableOpacity
style={{height:60, backgroundColor:'blue', marginTop:10}}
onPress={()=>{Multiplicar(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  MULTIPLICAR
</Text>
</TouchableOpacity>

<TouchableOpacity
style={{height:60, backgroundColor:'blue', marginTop:10}}
onPress={()=>{Dividir(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  DIVIDIR
</Text>
</TouchableOpacity>
<Text style={{fontSize:32}}>{resultadoSuma}</Text>
<Text style={{fontSize:32}}>{resultadoRest}</Text>
<Text style={{fontSize:32}}>{resultadoMulti}</Text>
<Text style={{fontSize:32}}>{resultadoDivi}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
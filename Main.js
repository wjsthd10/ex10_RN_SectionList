import React,{Component} from 'react';
import {View, Text, StyleSheet, Image, SectionList, TouchableOpacity, Alert } from 'react-native';

export default class Main extends Component{

    
    constructor(){
        super();    // 상속을 상속받은 클래스의 생성자를 명시적으로 호출해야한다.
        // 대량의 데이터 구릅
        this.state={
            datas:[
                // SectionList에서 섹션 한 객체에는 title, data2개의 프로퍼티 필요함
                {title:'한식', data:["백반", "비빕밥", "고기산적"]},
                {title:'일식', data:["돈카츠", "라멘", "스시"]},
                {title:'중식', data:["짜장면", "짬뽕", "탕수육"]},
            ]
        }
    }

    render(){
        return(
            <View style={styles.root}>
                <SectionList
                    sections={this.state.datas}
                    renderSectionHeader={({section, index})=>{
                        return (
                            <View style={styles.title}>
                                <Text style={styles.text}>{section.title}</Text>
                            </View>
                        )
                    }}
                    renderItem={({item})=>{
                        return (
                            <TouchableOpacity style={styles.item} onPress={()=>{Alert.alert(item)}}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index)=>index}>

                </SectionList>
            </View>
        );
    }    
}

const styles=StyleSheet.create({
    root:{
        backgroundColor:'#22993388',
        flex:1,
        padding:16
    },
    title:{
        backgroundColor:'#eeeeee',
        padding:8
    },
    text:{
        fontSize:20,
        fontWeight:"bold",        
    },
    item:{
        padding:8
    }
})
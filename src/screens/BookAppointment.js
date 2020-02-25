import React from 'react';
import {Text, View, Image, StyleSheet,ScrollView, PixelRatio} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

const appointments = [
  {
    title: 'Choose Appointment',
    type: [
      {
        appointmentName: 'Standard Eye Examination',
        charge: '(40 minutes @£40.00)',
      },
      {
        appointmentName:
          'Toric Gas Permeable or Multi Focus Contact Lens Examination',
        charge: '(40 minutes @£85.00)',
      },
      {
        appointmentName: 'Standard Eye Examination',
        charge: '(40 minutes @£75.00)',
      },
      {
        appointmentName: 'New Patient Contact Lens Examinaton',
        charge: '(40 minutes @£85.00)',
      },
      {
        appointmentName: 'Enhanced Eye Examination (inc OCT Exam)',
        charge: '(40 minutes @£70.00)',
      },
      {
        appointmentName:
          'Visual Fields Examination (Part of the Gluecoma Assessment Examination)',
        charge: '(20 minutes @£20.00)',
      },
      {
        appointmentName:
          'NCT Pressure Assessment (Part of the Gluecoma Assessment Examination)',
        charge: '(20 minutes @£20.00)',
      },
      {
        appointmentName: 'Full Dilation with Eye Examination',
        charge: '(20 minutes @£60.00)',
      },
      {
        appointmentName: 'Full Dilation with OCT and a Full Eye Examination',
        charge: '(40 minutes @£90.00)',
      },
    ],
  },
  {
    title: 'Your Information',
  },
  {
    title: 'Confirmation',
  },
];

const BookAppointment = ({}) => {
  return (
    <View>
        <ScrollView>
      <AppLogo
        text1="Book Appointment"
        logoBg={COLOR.blackBg}
        textStyle={{color: COLOR.black}}
        style={{
          paddingTop: DeviceInfo.hp('7%'),
          paddingBottom: DeviceInfo.hp('4%'),
        }}
      />
      <View style={styles.wrapper}>
      {appointments.map((list, i) => {
        return (
          <Collapse key={i}>
            <CollapseHeader>
            <View style={styles.seperator} />
              <View style={styles.headerView}>
                  <View style={styles.numberView}>
                    <Text style={styles.number}>{i+1}</Text>
                  </View>
                <Text style={styles.title}>{list.title}</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              {list.type &&
                list.type.map(element => {
                  return (
                    <View style={styles.rowView}>
                      <Text style={styles.appointmentName}>{element.appointmentName}</Text>
                      <Text style={styles.charge}>{element.charge}</Text>
                    </View>
                  );
                })}
            </CollapseBody>
          </Collapse>
        );
      })}
      </View>
      </ScrollView>
    </View>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({
    wrapper:{
        // width:'90%',
        // flexDirection:'row',
        justifyContent:'center'
    },
    rowView:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#999999d1',
        borderRadius:2,
        padding:DeviceInfo.hp("1.8%"),
        width:'90%',
        flexWrap:'wrap',
        alignSelf:'center',
        marginVertical:3
    },
    seperator:{
        height:DeviceInfo.hp("1.3%"),
        backgroundColor:'rgba(153,153,153,.5)'
    },
    headerView:{
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        paddingVertical:DeviceInfo.hp("1.2%")
    },
    numberView:{
        width:DeviceInfo.wp("6.5%"),
        height:DeviceInfo.wp("6.5%"),
        backgroundColor:COLOR.bubble,
        borderRadius:DeviceInfo.wp("4%"),
        alignItems:'center',
        justifyContent:'center',
        marginRight:5,
    },
    number:{
        color:COLOR.white,
    },
    title:{
        fontFamily:'Raleway-Bold'
        // fontWeight:'700'
    },
    appointmentName:{
        marginRight:DeviceInfo.hp("1.2%"),
        fontFamily:'Raleway-Bold',
        fontSize:DeviceInfo.hp("1.2%"),
        
    },
    charge:{
        // marginLeft:10,
        fontSize:DeviceInfo.hp("1.1%")
    }
});

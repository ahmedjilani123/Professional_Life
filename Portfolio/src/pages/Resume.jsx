import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import email from '../images/email.png';
import github from '../images/github.png';
import location from '../images/location.png';
import phone from '../images/phone-call.png'
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row'
  },
  sideBar: {
    width: '30%',
    backgroundColor: '#f0f0f0',
    paddingLeft: '10px',
    flexDirection: 'column',

  },
  mainContent: {
    width: '70%',
    padding: '10px',
    backgroundColor: '#ffffff',
  },
  profileSection: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    marginTop:'22px',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginVertical: '10px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
    borderBottom: '0.5px solid #000',
    paddingBottom: '2px',
  },
  section:{
    marginTop:'20px'
  },
  sectionContent: {
    fontSize: '12px',
    marginBottom: '1px',
  },
  TopLevel: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    width: '100%',
  },
  MainHeaderPart: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '30px',
  },
  MainHeaderPartDesc: {
    fontWeight: 'light',
    fontSize: '15px',
    color: 'gray',
  },
  Email: {
    fontSize: '10px',
    height: 'auto',
    width: '100%',
    marginTop:'11px',
    marginLeft:'10px',
  },
  EmailLogo: {
    fontSize: '10px',
    height: 'auto',
    width: '15px',
    marginTop:'7px'
  },
  logoSection: {
    fontSize: '10px',
    
    width: '25px',
    alignItems:'center',
    paddingBottom:'10px',
    backgroundColor:'white',
  }
});

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Sidebar */}
      <View style={styles.sideBar}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.logoSection}>
          <Image style={styles.EmailLogo} src={github} />
           
            <Image style={styles.EmailLogo} src={email} />
            <Image style={styles.EmailLogo} src={phone} />
            <Image style={styles.EmailLogo} src={location} />
          </View>
          <View >
            <Text style={styles.Email}>ahmedjilani123</Text>
            <Text style={styles.Email}>ahmedjilani0011@gmail.com</Text>
            <Text style={styles.Email}>+91 6353038823</Text>
            <Text style={styles.Email}>Ahmedabad</Text>

          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.sectionContent}>
            Bachelor of Technology{'\n'}
            Silver Oak University{'\n'}
            2022–2026{'\n'}{'\n'}
            (12th) H.S.C{'\n'}
            Ankur High School{'\n'}
            2021–2022{'\n'}{'\n'}
            (10th) S.S.C{'\n'}
            Ruth Memorial School{'\n'}
            2019–2020
          </Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.sectionContent}>
            HTML, CSS, JavaScript{'\n'}
            SAP Fiori/UI5{'\n'}
            MERN + C++{'\n'}
            PYTHON intermediate{'\n'}
            XML, JSON, AJAX, ODATA
          </Text>
        </View>

        {/* Soft Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soft Skills</Text>
          <Text style={styles.sectionContent}>
            Problem Solving{'\n'}
            Logical Thinking{'\n'}
            Teamwork{'\n'}
            Active Listening
          </Text>
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <Text style={styles.sectionContent}>
            Gujarati{'\n'}
            English{'\n'}
            Hindi
          </Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Objective */}
        <View style={styles.TopLevel}>
          <Text style={styles.MainHeaderPart}>Ahmed Jilani Shaikh</Text>
          <Text style={styles.MainHeaderPartDesc}>App Developer</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objective</Text>
          <Text style={styles.sectionContent}>
            To work with an organization where I can learn new skills and increase my knowledge, abilities for the organization goals as well as my professional growth along with the organization. I am looking for a challenging opportunity that will enable me to use my skills and abilities to achieve a challenging goal.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.sectionContent}>
            <Text>
              Daffodils Info Knowledge Solution{'\n'}
              Student Intern + SAP Fiori/UI5 Trainee{'\n'}
              Apr 2023 - Present
            </Text>
            <Text>
              • Joined as a Student Intern and learned various technologies.{'\n'}
              • Gained expertise in SAP Fiori/UI5 and related modules.{'\n'}
              • Learned SAP UI5 Controls and MVC architecture.
            </Text>
          </View>
        </View>

        {/* Hobbies */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hobbies</Text>
          <Text style={styles.sectionContent}>
            Learning:{'\n'}
            I am curious to learn new programming languages and the fundamentals of data structures.{'\n'}{'\n'}
            Playing Cricket:{'\n'}
            It makes me feel fresh and energetic, and I enjoy playing with colleagues and friends.{'\n'}{'\n'}
            Listening to Music:{'\n'}
            I love music because it relaxes my mind.{'\n'}{'\n'}
            Love To Code:{'\n'}
            Coding is my passion, and it is the reason I chose this field.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Resume;

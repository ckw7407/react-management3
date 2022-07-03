import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import { Paper } from '@mui/material';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
//import { withStyles } from '@mui/material/styles';


// const styles  = theme => ({
//   root: {
//     width: '100%',
//     marginTop:theme.spacing.unit * 3,
//     overflowX: "auto"
//   },
//   table :{
//     minWidth:1080
//   }
// });



// const customers =[
//   {
//     'id':1,
//     'image':'https://placeimg.com/64/64/1',
//     'name': '홍길동',
//     'birthday':'2021',
//     'gender':'남자',
//     'job':'대학생'
//   },
//   {
//     'id':2,
//     'image':'https://placeimg.com/64/64/2',
//     'name': '김길동',
//     'birthday':'2022',
//     'gender':'남자',
//     'job':'개발자'
//   },
//   {
//     'id':3,
//     'image':'https://placeimg.com/64/64/3',
//     'name': '박길동',
//     'birthday':'2022',
//     'gender':'남자',
//     'job':'디자이너'
//   }
// ]


class App extends Component {

  state = {
    customers:"",
  }

  componentDidMount(){
    //this.timer = setInterval(this.progress,20);
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){
    //const{classes} = this.props;
    return (
      // <Customer 
      //   id={customers.id}
      //   image={customers.image}
      //   name={customers.name}
      //   birthday={customers.birthday}
      //   gender={customers.gender}
      //   job={customers.job}
      //  /> 

      // <div>
      <Paper>
        <Table>
            <TableBody>
              <TableHead>
                  <TableRow>
                    <TableCell>번호</TableCell>
                    <TableCell>이미지</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>생년월일</TableCell>
                    <TableCell>성별</TableCell>
                    <TableCell>직업</TableCell>
                  </TableRow>
                </TableHead>
                  {
                    this.state.customers ? this.state.customers.map(c => {
                      return(
                        <Customer 
                          key={c.id}
                          id={c.id}
                          image={c.image}
                          name={c.name}
                          birthday={c.birthday}
                          gender={c.gender}
                          job={c.job}
                        />
                      );
                    }) : ""
                  }
              </TableBody>
            </Table>
            
        {/* <Customer 
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />

        <Customer 
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />

        <Customer 
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        /> */}
      </Paper>
      // </div>
      
    );
  }
}

export default App;
//export default withStyles(styles)(App);

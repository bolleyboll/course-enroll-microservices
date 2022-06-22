import React from 'react';
import UserService from '../../services/user.service';
import CourseService from '../../services/course.service';
import {Transaction} from '../../models/transaction';

export default class ProfilePage extends React.Component {

  constructor(props) {
    super(props);

    if(!UserService.currentUserValue){
      this.props.history.push('/');
      return;
    }

    this.state = {
      user: UserService.currentUserValue,
      transactions: []
    };
  }

  componentDidMount() {
    this.setState({
      transactions: {loading: true}
    });
    const user = this.state.user;
    CourseService.filterTransactions(user.id).then(transactions => {
      this.setState({transactions: transactions.data});
    });
  }

  deenroll(transaction) {
    console.log("Inside Deenroll");
    // if(!this.state.currentUser){
    //   this.setState({errorMessage: 'To enroll a course, you should sign in.'});
    //   return;
    // }

    //var transaction = new Transaction(this.state.currentUser.id, course);
    CourseService.deleteTransaction(transaction).then(data => {
      this.setState({infoMessage: 'You have de-enrolled the course successfully.'});
    }, error => {
      this.setState({errorMessage: 'Unexpected error occurred.'});
    });
  }

  render() {
    const {transactions} = this.state;
    return (
      <div className="col-md-12">
        <div className="jumbotron">
          <h1 className="display-4">Hello, {this.state.user.name}</h1>
        </div>
        {transactions.loading && <em>Loading transactions...</em>}
        {transactions.length &&
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course Title</th>
                <th scope="col">Author</th>
                <th scope="col">Category</th>
                <th scope="col">Enroll Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) =>
                <tr key={transaction.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{transaction.course.title}</td>
                  <td>{transaction.course.author}</td>
                  <td>{transaction.course.category}</td>
                  <td>{transaction.dateOfIssue}</td>

                  <td>
                    <button className="btn btn-success" onClick={()=>this.deenroll(transaction)}>De-enroll</button>
                  </td>
                </tr>
              )
              }
            </tbody>
          </table>
        }
      </div>
    );
  }

  // render() {
  //   const {courses, infoMessage, errorMessage} = this.state;
  //   return (
  //       <div className="col-md-12">
  //         {infoMessage &&
  //         <div className="alert alert-success">
  //           <strong>Successfull! </strong>{infoMessage}
  //           <button type="button" className="close" data-dismiss="alert" aria-label="Close">
  //             <span aria-hidden="true">&times;</span>
  //           </button>
  //         </div>
  //         }
  //         {errorMessage &&
  //         <div className="alert alert-danger">
  //           <strong>Error! </strong>{errorMessage}
  //           <button type="button" className="close" data-dismiss="alert" aria-label="Close">
  //             <span aria-hidden="true">&times;</span>
  //           </button>
  //         </div>
  //         }
  //         {courses.loading && <em> Loading courses...</em>}
  //         {courses.length &&
  //         <table className="table table-striped">
  //           <thead>
  //           <tr>
  //             <th scope="col">#</th>
  //             <th scope="col">Course Title</th>
  //             <th scope="col">Author</th>
  //             <th scope="col">Detail</th>
  //             <th scope="col">Action</th>
  //           </tr>
  //           </thead>
  //           <tbody>
  //           {courses.map((course, index) =>
  //               <tr key={course.id}>
  //                 <th scope="row">{index + 1}</th>
  //                 <td>{course.title}</td>
  //                 <td>{course.author}</td>
  //                 <td>
  //                   <button className="btn btn-info" onClick={()=>this.detail(course)}>Detail</button>
  //                 </td>
  //                 <td>
  //                   <button className="btn btn-success" onClick={()=>this.enroll(course)}>Enroll</button>
  //                 </td>
  //               </tr>
  //           )}
  //           </tbody>
  //         </table>
  //         }
  //       </div>
  //   );
  // }

}

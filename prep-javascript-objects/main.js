var person = {
  firstName: 'Chorong',
  lastName: 'Shin',
  hobby: 'Playing Tennis'
};
console.log(person);

person.fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', person.fullName);

person.job = 'Public Relations Freelancer';
console.log('person\' current job is:', person.job);

person.previousjob = 'Student';
console.log('person\'s previous job is:', person.previousjob);

console.log('The complete person object:', person);

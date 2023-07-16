/*THIS JS COMPONENT SETS A VARIABLE ARR AND CREATES A LOOP THAT PUSHES INTO THIS ARR AN OBJ THAT CORREPONDS TO EACH DAY OF THE MONTH AND CONTAINS ALSO THE KEY 'IMPEGNI' THAT WILL LATER BE USED TO SET THE AGENDA INTO THE CALENDAR  */

let arrDays = [];

for (let i = 1; i <= 31; i++) {
  arrDays.push({ day: [i], impegni: "" });
}

/* console.log(arrDays[4]) */

export default arrDays;

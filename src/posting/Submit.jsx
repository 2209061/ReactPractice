 import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

 const Submit = () => {
   const DoThis = a => alert(a);

   return (
     <div>
       <button
         onClick={DoThis.bind(this, 'You click this button')}
         className="btn btn-primary m-5"
       >
         Submit
       </button>
     </div>
   );
 };

 export default Submit;
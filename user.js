// Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCFsAjT6HOrnjKOR5FsF4XDyDPEPCVJABE",
    authDomain: "leave-1ca65.firebaseapp.com",
    projectId: "leave-1ca65",
    storageBucket: "leave-1ca65.appspot.com",
    messagingSenderId: "643820038980",
    appId: "1:643820038980:web:c86978443b61948cbf4511"
  };

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Firebase database
const database = firebase.database();

// Function to submit leave
function submitLeave() {
    const employeeName = $('#employeeName').val();
    const leaveType = $('#leaveType').val();
    const startDate = $('#startDate').val();
    const endDate = $('#endDate').val();

    // Add leave request to Firebase
    const leaveRef = database.ref('leaveRequests').push();
    leaveRef.set({
        employeeName,
        leaveType,
        startDate,
        endDate,
        status: 'Pending'
    }, (error) => {
        if (error) {
            console.error('Error submitting leave request: ', error);
        } else {
            alert('Leave request submitted successfully!');
        }
    });
}

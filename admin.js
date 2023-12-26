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

// Reference to leaveRequests in the database
const leaveRequestsRef = database.ref('leaveRequests');

// Display leave requests in the admin panel
function displayLeaveRequests() {
    leaveRequestsRef.on('value', (snapshot) => {
        const leaveRequestsDiv = $('#leaveRequests');
        leaveRequestsDiv.empty();

        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            leaveRequestsDiv.append(`<div class="leave-request">
                <p><strong>Employee Name:</strong> ${data.employeeName}</p>
                <p><strong>Leave Type:</strong> ${data.leaveType}</p>
                <p><strong>Start Date:</strong> ${data.startDate}</p>
                <p><strong>End Date:</strong> ${data.endDate}</p>
                <p><strong>Status:</strong> ${data.status}</p>
                <button onclick="approveLeave('${childSnapshot.key}')">Approve</button>
                <button onclick="denyLeave('${childSnapshot.key}')">Deny</button>
            </div>`);
        });
    });
}

// Approve leave request
function approveLeave(leaveId) {
    leaveRequestsRef.child(leaveId).update({ status: 'Approved' });
}

// Deny leave request
function denyLeave(leaveId) {
    leaveRequestsRef.child(leaveId).update({ status: 'Denied' });
}

// Call the display function
displayLeaveRequests();

// import tableData from '../../helpers/data/tableData';
// import smashData from '../../helpers/data/smashData';

const showEditReservationForm = (selectedReservation) => {
  let domString = '';
  domString += '<form class="new-reservation-form">';
  domString += '<div class="form-group">';
  domString += '<label for="Current Number of Guests">Current Number of Guests</label>';
  domString += `<input type="number" class="form-control" id="edit-number-of-guests" placeholder="${selectedReservation.numOfGuests}">`;
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="Party Name">Party Name</label>';
  domString += `<input type="text" class="form-control" id="edit-party-name" placeholder="${selectedReservation.partyName}">`;
  domString += '</div>';
  domString += `<button type="submit" id="edit-reservation-button" data-reservation-id="${selectedReservation.id}" data-table-id="${selectedReservation.tableId}" data-time-slot-id="${selectedReservation.timeSlotId}" class="btn btn-primary">Edit Reservation</button>`;
  domString += '</form>';
  return domString;
};

export default { showEditReservationForm };

import React from 'react'

const centerContainer = {
   'margin-right': '30%',
    'margin-left': '30%'
}

const UserInputModal = function () {
    return (
        <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-5 shadow">
                    <div class="modal-header p-2 pb-2 border-bottom-0">
                        <h5 class="newExpenditure"></h5>
                        <h2 class="fw-bold mb-0">Enter your expenditure below!</h2>
                        <button type="button" class="btn-close bg-light rounded" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i></button>
                    </div>

                    {/* this is the datepicker */}
                    <div className='d-flex column mb-2' style={centerContainer}>
                        <label for="expenditureDate"></label>
                        <input type='date' id='expenditureDate' name='Date' value='1969-04-20' />
                    </div>

                    {/* this is the dropdown menu for the modal */}
                    <div class="dropdown d-flex column" style={centerContainer}>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Category</a>
                            <a class="dropdown-item" href="#">Another Category</a>
                            <a class="dropdown-item" href="#">Some other Category</a>
                        </div>
                    </div>

                    {/* this is the two input fields, and submit/cancel buttons */}
                    <div class="modal-body p-5 pt-0">
                        <form>
                            <div class="form-floating mb-1">
                                <input type="totalInput" class="form-control rounded-4" id="floatingTotalInput" placeholder="Enter Expenditure Here" />
                                <label for="floatingTotalInput"></label>
                            </div>
                            <div class="form-floating mb-1">
                                <input type="description" class="form-control rounded-4" id="floatingDescription" placeholder="Description" />
                                <label for="floatingDescription"></label>
                            </div>
                            <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Submit</button>
                            <button class="w-100 mb-2 btn btn-lg rounded-4 btn-secondary" type="submit">Cancel</button>
                            <small class="text-muted">By clicking Submit, you agree to the terms of use.</small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LoggedOutUserModal = function () {
    return (
        <div class="modal modal-sheet position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSheet">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-6 shadow">
                    <div class="modal-header border-bottom-0">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body py-0">
                        <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
                    </div>
                    <div class="modal-footer flex-column border-top-0">
                        <button type="button" class="btn btn-lg btn-primary w-100 mx-0 mb-2">Save changes</button>
                        <button type="button" class="btn btn-lg btn-light w-100 mx-0" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    UserInputModal,
    LoggedOutUserModal
};

/* likely will make multiple modals for different input types */

/* loggededoutusermodal for if a user auth token is invalid, reroute to login page */
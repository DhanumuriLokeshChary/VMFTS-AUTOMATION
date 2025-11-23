const FundPageLocators = {

    CreateFund              : 'span[title="create"]',
    ProjectNameInput        : '#projectName',
    FundNumberInput         : '#udAsnNumber',
    
    ProjectIssueDate        : '#projectIssueDate',   // <-- FIX THIS TO REAL ID
    ProjectCompletiondate   : '#projectCompletionDate', // FIX

    Scheme                  : 'select#selectscheme',
    FinancialYear           : 'select#financialyear',

    TotalSanctionedAmount   : 'input[id="totalSanctionAmt"]', // FIX
    ChooseDocument          : 'input[type="file"]', // FIX based on your HTML

    ExpenseCode             : 'select#crcNumber',
    ExpenseAmount           : 'input[placeholder="Total Amount"]',

    SelectDesignation       : 'ng-select#selectdesignation',
    SelectEmployee          : 'ng-select#selectemployee',

    NoteFile                : '//textarea[@formcontrolname="comments"]'
};


module.exports = { FundPageLocators };

document.getElementById("issueInputForm").addEventListener("submit", saveIssue);

function saveIssue(e) {
  var issueDesc = document.getElementById("issueDescInput").value;
  var issueSeverity = document.getElementById("issueSeverityInput").value;
  var issueAssignedTo = document.getElementById("issueAssignToInput").value;
  var issueId = chance.guid();
  var issueStatus = "open";

  var issue = {
    is: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  };

  if (localStorage.getItem("issues") == null) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  }

  document.getElementById("issueInputForm").reset();

  fetchIssues();

  e.preventDefault();
}

function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem("issues"));
  var issuesList = document.getElementById("issuesList");

  issuesList.innerHTML = "";

  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

    issuesList.innerHTML +=
      '<siv class="well>' +
      "<h6>Issue ID:" +
      id +
      "</h6>" +
      '<p><span class="label-info' +
      status +
      "</span></p" +
      _;
    "<h3>" +
      desc +
      "</h3>" +
      '<p><span class = "glyphicon glyphicon-time"></span>' +
      severity +
      "</p>";
    '<p><span class = "glyphicon glyphicon-user"></span>' + assignedTo + "</p>";
    '<a href="#" onclick = "setStatusClosed(\'' +
      id +
      '\')" class = "btn btn-warning">Close</a>';
    '<a href="#" onclide="deleteIssue(\'' +
      id +
      '\'))" class = "btn btn-danger">Close</a>';
  }
}

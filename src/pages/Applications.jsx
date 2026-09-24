function Applications() {
  const applications = [
    ["Frontend Developer", "TechNova Solutions", "20 Sep 2026", "Under Review"],
    ["UI/UX Designer", "Creative Minds", "17 Sep 2026", "Interview"],
    ["Backend Developer", "CodeCraft", "12 Sep 2026", "Submitted"]
  ];

  return (
    <main className="container py-5">
      <h1>Applications</h1>
      <p className="text-muted">Sample application records.</p>

      <div className="table-responsive">
        <table className="table table-bordered bg-white mt-3">
          <thead>
            <tr>
              <th>Job</th>
              <th>Company</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application, index) => (
              <tr key={index}>
                {application.map((item, itemIndex) => (
                  <td key={itemIndex}>{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Applications;
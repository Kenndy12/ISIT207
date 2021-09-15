using System;
using System.Data;
using System.Data.OleDb;


namespace Task4 {
    public partial class Login : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
       
        }

        protected void btnLogin_Click(object sender, EventArgs e) {

            OleDbConnection conn = new OleDbConnection("Provider=Microsoft.ACE.OLEDB.12.0; Data Source="
                                    + Server.MapPath("App_Data/myacc.accdb"));
            conn.Open();
            string sqlCommand = "SELECT * FROM Account WHERE username='";
            sqlCommand = sqlCommand + usernameInput.Text;
            sqlCommand = sqlCommand + "' AND password='" + passwordInput.Text + "'";


            lblStatus.Text = sqlCommand;
            OleDbCommand cmd = new OleDbCommand(sqlCommand, conn);
            OleDbDataReader reader = cmd.ExecuteReader();
            if (reader.Read()) {
                Session["loggedIn"] = "true";
                Session["username"] = reader["username"];
                lblStatus.Text = "Logged in successfully, Yeah! ";
                Response.Redirect("mainpage.html");
            }
            else {
                Session["loggedIn"] = "false";
                lblStatus.Text = "Incorrect Username and/or Password";
            }



        }
    }
}
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Task4.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Login Page</title>
</head>
<body>
   <form id="form1" runat="server">
       <asp:Label ID="Label1" runat ="server" text ="Username"></asp:Label>
       <asp:TextBox ID="usernameInput" runat="server"></asp:TextBox>
       <br />
       <asp:Label ID="Label2" runat="server" text="Password"></asp:Label>
       <asp:TextBox ID="passwordInput" Textmode="Password" runat="server"></asp:TextBox>
       <br />
       <asp:Button ID="btnLogin" runat="server" Text="Login" OnClick="btnLogin_Click" />
       <br />
       <asp:Label ID="lblStatus" runat="server" Text=""></asp:Label>
       <br />
       <asp:Label ID="Label3" runat="server" Text="Username : root"></asp:Label> <br />
       <asp:Label ID="Label4" runat="server" Text="Password : toor"></asp:Label>
   </form>
</body>
</html>

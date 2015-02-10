using System;
using System.Collections;
using System.Configuration;
using System.Data;

using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

public partial class getBranch : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {

            string sex = Page.Request.Form["sex"].ToString();
            string data = "";
            string sql = "Select BranchCode,BranchName from JiccBranchs where BranchCode!=0 and master=0 and list1=1 and sex=" + sex;
            DBCnn db = new DBCnn();
            DataTable tb = db.GetTable(sql);
            for (int x = 0; x < tb.Rows.Count; x++)
            {
                data =data+ tb.Rows[x]["BranchCode"].ToString() + ";" + tb.Rows[x]["BranchName"].ToString()+"//";
            }
            Response.Write(data + "/++/");
        }
        catch (Exception ex) { Response.Write(ex.Message + "/++/"); }

    }
}

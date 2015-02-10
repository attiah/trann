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

public partial class getcourse : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            string id = Page.Request.Form["id"].ToString();
            string[] Col_name = { "CourseCode", "CourseName","type"};
            string[] Col_Header = { " اسم الدورة", "مسمي الدورة " ,""};
            int[] Col_Width = { 10, 350 ,10};
            bool[] Col_show = { false , true,false  };
            string[] Col_algin = { "center", "right", "right"};
            GridDB grid = new GridDB(2000, Col_name, Col_Header, Col_Width, Col_show, Col_algin, "CourseName", "asc", 1, " JiccBranchCourseSel ", " where CourseCode!='' and BranchCode='"+id+"'", "CourseCode");
            grid.check = true;
            grid.showdelete = false;
            grid.showedit = false;
            grid.Sort = false;
            grid.showfooter = false;
            grid.showheader = false;
            Response.Write(grid.Draw_Table() + "/++/" );
        }
        catch(Exception ex) { }
    }
}

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
    <style>
        table{
            border-collapse: collapse;
            width : 100%;
            margin:20px 0px;
            font-size:18px;
            text-align:center;
        }
        th,td{
            border:1px solid #ddd;
            padding:10px;
        }
        th{
            background-color:rgb(152, 221, 136);
            color : white;
        }
        td{
            background-color:white;
            color:black;
        }

    </style>
    <body>
        <h2>Mentors of Mca Department </h2>
        <table border=".5">
            <tr ><th>Name</th><th>Designation</th><th>Subjects</th><th>Experience</th></tr>
            <xsl:for-each select="mentors/mentor">
                <tr>
                    <td><xsl:value-of select="name"/></td>
                    <td><xsl:value-of select="designation"/></td>
                    <td><xsl:value-of select="subjects"/></td>
                    <td><xsl:value-of select="yearsOfExp"/></td>
                </tr>
            </xsl:for-each>
        </table>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet> 
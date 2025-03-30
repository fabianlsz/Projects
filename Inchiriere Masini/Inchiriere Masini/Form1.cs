using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Inchiriere_Masini
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            int ok = 0;
            int tip = 0;
            string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\BD_CarRental.mdf;Integrated Security=True;Connect Timeout=30";
            SqlConnection sqlConnection = new SqlConnection(connectionString);
            sqlConnection.Open();

            string comanda = "SELECT * FROM Utilizatori";
            SqlCommand sqlCommand = new SqlCommand(comanda, sqlConnection);

            SqlDataReader reader = sqlCommand.ExecuteReader();
            while (reader.Read())
            {
                if (reader[1].ToString() == textBox1.Text && reader[2].ToString() == textBox2.Text)
                {
                    ok = 1;
                    tip = Convert.ToInt32(reader[3].ToString());
                }
            }

            if (ok == 1)
            {
                if (tip == 1)
                {
                    FormGestionare formGestionare = new FormGestionare();
                    formGestionare.ShowDialog();
                }
                else if (tip == 2)
                {
                    FormClient formClient = new FormClient();
                    formClient.ShowDialog();
                }
            }
            else
            {
                MessageBox.Show("Date incorecte!");

            }
            textBox1.Text = string.Empty;
            textBox2.Text = string.Empty;
            sqlConnection.Close();
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            System.Environment.Exit(0);
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}

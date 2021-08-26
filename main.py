
from datetime import datetime
import pandas
import random
import smtplib

mail = "python1send@gmail.com"
pwd = "sendProJ1"

today = datetime.now()
today_tuple = (today.month, today.day)


data = pandas.read_csv("birthdays.csv")

birthdays_dict = {(data_row["month"], data_row["day"]): data_row for (index, data_row) in data.iterrows()}

if today_tuple in birthdays_dict:
    person = birthdays_dict[today_tuple]
    file_path = f"letter_templates/letter_{random.randint(1,3)}.txt"
    with open(file_path) as letter_file:
        contents = letter_file.read()
        contents = contents.replace("NAME", person["name"])
    with smtplib.SMTP("smtp.gmail.com") as connection:
        connection.starttls()
        connection.login(mail, pwd)
        connection.sendmail(from_addr=mail, to_addrs=person["email"],msg = f"Subject:Happiee Birthdayy\n\n{contents}")










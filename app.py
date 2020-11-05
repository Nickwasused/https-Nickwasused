from flask import Flask, render_template
from datetime import datetime
app = Flask(__name__)
today = datetime.today()

#Variables
title = 'Nickwasused'
lang = 'de' #html language code
datem = datetime.today().strftime("%Y")

#Links
linklist = ['https://github.com/Nickwasused', 'https://www.youtube.com/channel/UCsRLiy6MV4udCvbbcKBl5-g', 'https://crowdin.com/profile/n1ckw4sused', 'https://github.com/Nickwasused/FreeGamesonSteam', 'mailto:nickwasused.social@protonmail.com', 'https://twitter.com/Nickwasused', 'https://keybase.io/Nickwasused/chat']

@app.route("/")
def index():
    return render_template('index.html', title=title, date=datem, lang=lang, links=linklist)


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html', title=title), 404


if __name__ == '__main__':
    app.run(debug=False)
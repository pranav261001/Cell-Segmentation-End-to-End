import os
from pathlib import Path
import logging

logging.basicConfig(level=logging.INFO, format='[%(asctime)s]: %(message)s')

project_name = 'CellSegmentation'

list_of_files = [
".githubworkflows/.gitkeep",
"data/.gitkeep",
f"{project_name}/_init_.py",
f"{project_name}/components/_init_.py",
f"{project_name}/components/data_ingestion.py",
f"{project_name}/components/data_validation.py",
f"{project_name}/components/model_trainer.py",
f"{project_name}/constant/_init_.py",
f"{project_name}/constant/training_pipeline/_init_.py",
f"{project_name}/constant/application.py",
f"{project_name}/entity/config_entity.py",
f"{project_name}/entity/artifacts_entity.py",
f"{project_name}/exception/_init_.py",
f"{project_name}/logger/_init_.py",
f"{project_name}/pipeline/_init_.py",
f"{project_name}/pipeline/training_pipeline.py",
f"{project_name}/utils/_init_.py",
f"{project_name}/utils/main_utils.py",
"research/trials.ipynb",
"templates/index.html",
"app.py",
"Dockerfile",
"requirements.txt",
"setup.py",
]

for filepath in list_of_files:
    filedir, filename = os.path.split(filepath)

    if filedir!= "":
        os.makedirs (filedir, exist_ok=True)
        logging.info(f"Creating directory: {filedir} for the file {filename}")

    if(not os.path.exists(filename)) or (os.path.getsize(filename) == 0):
        with open(filepath, "w") as f:
            pass
            logging.info(f"Creating empty file: {filename}")

    else:
        logging.info(f"{filename} is already created")
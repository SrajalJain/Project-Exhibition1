from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from .ml_model import load_model, predict_video
import os

MODEL_PATH = r"D:\New_Project\Model\model_87_acc_20_frames_final_data.pt"
model = load_model(MODEL_PATH)

def index(request):
    if request.method == "POST":
        uploaded_file = request.FILES['video']
        fs = FileSystemStorage()
        video_path = fs.save(uploaded_file.name, uploaded_file)
        video_path = fs.path(video_path)

        prediction, confidence = predict_video(model, video_path)
        result = "REAL" if prediction == 1 else "FAKE"

        return render(request, 'result.html', {
            'result': result,
            'confidence': f'{confidence:.2f}%',
            'video_name': uploaded_file.name
        })
    return render(request, 'index.html')

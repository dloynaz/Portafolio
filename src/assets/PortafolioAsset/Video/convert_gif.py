import os
import subprocess

def convert_gifs_to_webm():
    files = [f for f in os.listdir('.') if f.lower().endswith('.gif')]
    
    if not files:
        print("No GIF files found in the directory.")
        return

    for gif_file in files:
        base_name = os.path.splitext(gif_file)[0]
        output_file = f"{base_name}.webm"
        
        print(f"Processing: {gif_file}")
        
        # Added '-pix_fmt yuv420p' to ensure compatibility with the VP9 encoder
        command = [
            'ffmpeg', '-y', '-i', gif_file, 
            '-c:v', 'libvpx-vp9', 
            '-crf', '30', 
            '-b:v', '0', 
            '-pix_fmt', 'yuv420p',
            '-an', 
            output_file
        ]
        
        try:
            subprocess.run(command, check=True, capture_output=True)
            print(f"Success: {output_file}")
        except subprocess.CalledProcessError as e:
            print(f"Error converting {gif_file}:")
            print(e.stderr.decode())

if __name__ == "__main__":
    convert_gifs_to_webm()

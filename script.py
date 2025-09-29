# Let's check what files we have created and provide them for download
import os

def list_directory_contents(path='.'):
    """List all files and directories in the given path"""
    items = []
    try:
        for item in os.listdir(path):
            item_path = os.path.join(path, item)
            if os.path.isdir(item_path):
                items.append(f"📁 {item}/")
                # List contents of subdirectories
                sub_items = list_directory_contents(item_path)
                for sub_item in sub_items:
                    items.append(f"    {sub_item}")
            else:
                # Get file size
                size = os.path.getsize(item_path)
                items.append(f"📄 {item} ({size} bytes)")
    except PermissionError:
        items.append(f"❌ Permission denied to access {path}")
    
    return items

print("📂 PM Internship Platform Files:")
print("=" * 50)
contents = list_directory_contents('.')
for item in contents:
    print(item)

# Check if files exist and show their status
files_to_check = [
    'public/index.html',
    'src/style.css', 
    'src/app.js'
]

print("\n📋 File Status:")
print("=" * 30)
for file_path in files_to_check:
    if os.path.exists(file_path):
        size = os.path.getsize(file_path)
        print(f"✅ {file_path} - {size} bytes")
    else:
        print(f"❌ {file_path} - Not found")
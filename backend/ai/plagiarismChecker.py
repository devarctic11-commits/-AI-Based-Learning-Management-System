import difflib

def check_plagiarism(text1, text2):
    ratio = difflib.SequenceMatcher(None, text1, text2).ratio()
    return ratio

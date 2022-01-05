def chunk_list(arr: list, arr_len, chunk_size: int):
    for i in range(0, arr_len, chunk_size):
        yield arr[i:i+chunk_size]
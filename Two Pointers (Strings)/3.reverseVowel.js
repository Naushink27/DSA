//Reverse Vowels of a String

function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let arr=s.split('');
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if(!vowels.has(arr[left])){
            left++;
            continue;
        }
        if(!vowels.has(arr[right])){
            right--;
            continue;
        }
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr.join('');
}
# 빅오 표기법

`정의`

알고리즘의 효율성을 표기해주는 표기법

알고리즘 최악의 실행 시간을 표기한다.

알고리즘의 시간 복잡도와 공간 복잡도를 나타내는데 주로 사용된다.

- 시간 복잡도 표기법
  | Big-O(빅 오) | 알고리즘 최악의 실행 시간을 표기 |
  | ---------------- | -------------------------------- |
  | Big-Ω(빅 오메가) | 알고리즘 최상의 실행 시간을 표기 |
  | Big-θ(빅 세타) | 알고리즘 평균 실행 시간을 표기 |

`특징`

1. 상수항을 무시

   어떤 알고리즘이 O(N+5)의 복잡도를 가졌으면 상수를 생략해 O(N)으로 표기한다.

2. 계수도 무시

   어떤 알고리즘이 O(3N)의 복잡도를 가졌으면 계수를 생략해 O(N)으로 표기한다.

3. 최고차항만 표기

   어떤 알고리즘이 O(3N^3+2N^2+N+5)의 복잡도를 가졌으면 O(N^3)으로 표기한다.

`종류`

실행 속도 `O(1)`< `O(log N)`< `O(N)`< `O(N log N)`< `O(N^2)`< `O(2^N)`

1. O(1)

   입력값(N)이 증가해도 실행시간은 동일한 알고리즘, index로 접근하여 바로 처리할 수 있는 연산 과정의 시간 복잡도 → 기본 연산 수라고 생각하면 편함

   ex) stack의 push, pop

2. O(log N)

   연산이 한 번 실행될 때 마다 데이터의 크기가 절반 감소하는 알고리즘 (log의 지수는 항상 2)

   ex) binary search 알고리즘, tree 형태 자료구조 탐색

3. O(N)

   입력값(N)이 증가함에 따라 실행시간도 선형적으로 증가하는 알고리즘

   ex) 1중 for문

4. O(N log N)

   O(N)의 알고리즘과 O(log N)의 알고리즘이 중첩된 형태

   ex) 퀵 정렬(quick sort), 병합정렬(merge sort), 힙 정렬(heap Sort)

5. O(N^2)

   O(N)의 알고리즘과 O(log N)의 알고리즘이 중첩된 형태

   ex) 2중 For 문, 삽입정렬(insertion sort), 거품정렬(bubble sort), 선택정렬(selection sort)

6. O(2^N)

   빅오 표기법 중 가장 느린 시간 복잡도로 주로 재귀적으로 수행하는 알고리즘이 이에 해당

   ex) 피보나치 수열

## 💡알고리즘 문제 풀 때 Tip

- 입력 데이터의 범위와 실행 시간 범위를 고려하면 문제에 대한 감을 잡을 수 있다.
- 보통 코드 1억 번 수행시간은 1초이다. 이를 기준으로 전체 수행시간을 어림잡아 문제에 사용되는 알고리즘에 대한 힌트를 얻으면 알고리즘 사용 가능 여부를 판단하여 접근할 수 있다.

### 시간 복잡도

소스 코드 로직의 실행 시간(Execution Time)을 예측해 얼마나 효율적인 코드인가를 나타내는 개념이다. 실행 시간은 연산(Operation)에 비례해 길어진다. CPU사용량과 관련 있다.

### 공간 복잡도

코드가 얼마나 메모리 공간을 효율적으로 사용하는지에 대한 개념이다. 정적 배열이나 해시 테이블 처럼 공간을 미리 확보하는 자료구조에 자주 등장하는 개념이다. RAM 사용량과 관련 있다.

소스 코드 로직에 먼저 동작이 되어야 하겠지만, 동작뿐 아니라 시공간 복잡도를 계산하여 얼마나 효율적인 코드인지 여부가 판가름 된다.

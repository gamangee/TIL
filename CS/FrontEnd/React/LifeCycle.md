# React Life Cycle
- 3가지 주요 단계를 통해 주기를 관리하고 관찰
- `생명주기` : 생성 → 업데이트 → 제거

# Mounting
- DOM에 요소를 붙이는 것
- render() 메소드를 항상 호출
- 컴포넌트를 마운팅할 때 순서대로 4가지 내장 메소드 호출
[1] constructor()
[2] getDerivedStateFromProps()
[3] render()
[4] componentDidMount()

# Updating
- 컴포넌트가 업데이트 할 때
- 상태나 props가 변경될 때 마다 업데이트
- 업데이트가 되면 순서대로 5가지 내장 메소드 실행
[1] getDerivedStateFromProps()
[2] shouldComponentUpdate()
[3] render()
[4] getSnapshotBeforeUpdate()
[5] componentDidUpdate()

# Unmounting
- DOM을 제거하거나 Uncounting 할 때 
- componentWillUnmount()
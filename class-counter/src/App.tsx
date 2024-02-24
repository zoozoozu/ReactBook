import { ErrorInfo, useState } from 'react';
import { Component } from 'react';
import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { Label } from 'components/Label';
import './App.css';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = Record<string, never>;
interface State {
  readonly counter : number;
}

export class App extends Component<Props, State> {
  constructor(props: Props){
    super(props);

    this.state = {
      counter: 0,
    };
  }

  private sub = () => {
    const {counter} = this.state;
    this.setState({
      counter: counter - 1,
    });
  };

  private add = () => {
    const {counter} = this.state;
    this.setState({
      counter: counter + 1,
    });
  };

  render () {
    const {counter} = this.state;

    return (
      <Container>
             <Title>Counter App</Title>
             <Contents>
               <Button label='-' onClick={this.sub}/>
               <Label data = {counter}/>
               <Button label='+' onClick={this.add}/>
             </Contents>
           </Container>
    )
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State){
    console.log('getDerivedStateFromProps');
    console.log('nextProps: ', nextProps);
    console.log('prevState: ', prevState);
    
    return null;
  }

  componentDidMount(): void {
    console.log('componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    console.log('getSnapshotBeforeUpdate');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    return {
      testData: true,
    };
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log('componentDidUpdate');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    console.log('snapshot: ', snapshot);
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    console.log('shouldComponentUpdate');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    
    //return nextProps.id != this.props.id;
    return true;
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount');
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('componentDidCatch');
    console.log('error: ', error);
    console.log('info: ', errorInfo);
  }

}


export default App;

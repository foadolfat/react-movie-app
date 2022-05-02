import ReviewPage from './pages/ReviewPage';
import MovieContext from './contexts/MovieContext';

function App() {
  return (
    <MovieContext>
      <div className="App">
        <ReviewPage />
      </div>
    </MovieContext>
  );
}

export default App;

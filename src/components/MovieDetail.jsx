import React from 'react';
import { useParams } from 'react-router-dom';
import movieDetailData from '../data/movieDetailData.json';
import '../styles/MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movieDetailData;

  if (!movie || movie.id.toString() !== id) {
    return <p>영화를 찾을 수 없습니다.</p>;
  }

  return (
    <div className="movie-detail-container">
      <table className="movie-detail-table">
        <tbody>
          <tr>
            <td className="poster-cell" rowSpan="4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} Poster`}
                className="movie-poster"
              />
            </td>
            <td className="title-cell">제목</td>
            <td>{movie.title}</td>
          </tr>
          <tr>
            <td className="rating-cell">평점</td>
            <td>{movie.vote_average} ({movie.vote_count}명 투표)</td>
          </tr>
          <tr>
            <td className="genre-cell">장르</td>
            <td>
              {movie.genres && movie.genres.length > 0
                ? movie.genres.map((genre) => genre.name).join(', ')
                : '장르 정보 없음'}
            </td>
          </tr>
          <tr>
            <td className="overview-cell">줄거리</td>
            <td>{movie.overview}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MovieDetail;

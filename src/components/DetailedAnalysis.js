import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './DetailedAnalysis.css';

const DetailedAnalysis = () => {
  const navigate = useNavigate();
  const [clickedRooms, setClickedRooms] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const storedClickedRooms = JSON.parse(localStorage.getItem('clickedRooms')) || [];
    setClickedRooms(storedClickedRooms);
    setProgress((storedClickedRooms.length / 42) * 100); // assuming there are 42 rooms
  }, []);

  const handleRoomClick = (roomId) => {
    const updatedClickedRooms = [...clickedRooms, roomId];
    setClickedRooms(updatedClickedRooms);
    localStorage.setItem('clickedRooms', JSON.stringify(updatedClickedRooms));
    setProgress((updatedClickedRooms.length / 42) * 100); // update progress

    navigate(`/room-details/${roomId}`);
  };

  return (
    <div className="detailed-analysis">
      <h2 className="title">Analyse détaillée</h2>
      <p className="subtitle">Choisissez une pièce pour commencer</p>
      <svg width="141" height="588" viewBox="0 0 141 588" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_81_643)">
          <path d="M140.654 588L140.654 0.346924L0.863907 0.346918L0.863881 588L140.654 588Z" fill="white" fillOpacity="0.01" />
          <path d="M4.49257 277.522L4.49258 14.223C4.49258 6.55946 10.6817 0.346918 18.3161 0.346918L40.7793 0.346919L40.7793 3.64249L140.482 3.6425L140.482 42.4956L68.2536 42.4956L68.2536 144.658L140.654 144.658L140.654 183.165L68.2536 183.165L68.2536 189.929L71.3639 189.929L71.3639 278.563L68.2536 278.563L68.2536 285.327L140.654 285.327L140.654 319.671L68.2536 319.671L68.2536 325.742L71.3639 325.742L71.3639 412.294L68.2536 412.294L68.2536 419.232L140.654 419.232L140.654 455.136L68.2536 455.136L68.2536 535.965L137.371 535.965L137.371 587.827L19.2979 587.827C11.6849 587.827 5.50478 581.648 5.47437 574.006L4.49257 326.609L0.863893 326.609L0.863895 277.522L4.49257 277.522Z" fill="#B8C8B3" stroke="black" />
          <path id="room1" className="room" d="M33.522 78.7468L33.522 33.9963L4.49257 33.9963L4.49257 78.7468L33.522 78.7468Z" fill={clickedRooms.includes('room1') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room1')} />
          <path d="M33.522 78.7468L33.522 33.9963L4.49257 33.9963L4.49257 78.7468L33.522 78.7468Z" stroke="black" />
          <path id="room2" className="room" d="M33.522 91.2353L33.522 78.7468L4.49257 78.7468L4.49257 91.2353L33.522 91.2353Z" fill={clickedRooms.includes('room2') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room2')} />
          <path d="M33.522 91.2353L33.522 78.7468L4.49257 78.7468L4.49257 91.2353L33.522 91.2353Z" stroke="black" />
          <path id="room3" className="room" d="M33.522 104.765L33.522 91.2354L4.49257 91.2354L4.49257 104.765L33.522 104.765Z" fill={clickedRooms.includes('room3') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room3')} />
          <path d="M33.522 104.765L33.522 91.2354L4.49257 91.2354L4.49257 104.765L33.522 104.765Z" stroke="black" />
          <path id="room4" className="room" d="M33.522 146.74L33.522 104.765L4.49257 104.765L4.49257 146.74L33.522 146.74Z" fill={clickedRooms.includes('room4') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room4')} />
          <path d="M33.522 146.74L33.522 104.765L4.49257 104.765L4.49257 146.74L33.522 146.74Z" stroke="black" />
          <path id="room5" className="room" d="M30.0664 159.575L30.0664 146.74L4.49288 146.74L4.49288 159.575L30.0664 159.575Z" fill={clickedRooms.includes('room5') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room5')} />
          <path d="M30.0664 159.575L30.0664 146.74L4.49288 146.74L4.49288 159.575L30.0664 159.575Z" stroke="black" />
          <path id="room6" className="room" d="M30.0664 183.858L30.0664 159.575L4.49288 159.575L4.49288 183.858L30.0664 183.858Z" fill={clickedRooms.includes('room6') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room6')} />
          <path d="M30.0664 183.858L30.0664 159.575L4.49288 159.575L4.49288 183.858L30.0664 183.858Z" stroke="black" />
          <path id="room7" className="room" d="M33.522 227.221L33.522 183.858L4.49257 183.858L4.49257 227.221L33.522 227.221Z" fill={clickedRooms.includes('room7') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room7')} />
          <path d="M33.522 227.221L33.522 183.858L4.49257 183.858L4.49257 227.221L33.522 227.221Z" stroke="black" />
          <path id="room8" className="room" d="M33.522 277.869L33.522 227.221L4.49257 227.221L4.49257 277.869L33.522 277.869Z" fill={clickedRooms.includes('room8') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room8')} />
          <path d="M33.522 277.869L33.522 227.221L4.49257 227.221L4.49257 277.869L33.522 277.869Z" stroke="black" />
          <path id="room9" className="room" d="M33.522 503.703L33.522 556.085L4.83815 556.085L4.83816 503.703L33.522 503.703Z" fill={clickedRooms.includes('room9') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room9')} />
          <path d="M33.522 503.703L33.522 556.085L4.83815 556.085L4.83816 503.703L33.522 503.703Z" stroke="black" />
          <path id="room10" className="room" d="M4.83801 556.085L4.83801 573.777C4.83801 581.44 11.0271 587.653 18.6615 587.653L28.6836 587.653L28.6836 556.085L4.83801 556.085Z" fill={clickedRooms.includes('room10') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room10')} />
          <path d="M4.83801 556.085L4.83801 573.777C4.83801 581.44 11.0271 587.653 18.6615 587.653L28.6836 587.653L28.6836 556.085L4.83801 556.085Z" stroke="black" />
          <path id="room11" className="room" d="M33.522 491.561L33.522 503.703L4.83815 503.703L4.83815 491.561L33.522 491.561Z" fill={clickedRooms.includes('room11') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room11')} />
          <path d="M33.522 491.561L33.522 503.703L4.83815 503.703L4.83815 491.561L33.522 491.561Z" stroke="black" />
          <path id="room12" className="room" d="M33.522 453.402L33.522 491.561L4.83815 491.561L4.83816 453.402L33.522 453.402Z" fill={clickedRooms.includes('room12') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room12')} />
          <path d="M33.522 453.402L33.522 491.561L4.83815 491.561L4.83816 453.402L33.522 453.402Z" stroke="black" />
          <path id="room13" className="room" d="M30.0664 437.444L30.0664 453.402L4.83847 453.402L4.83847 437.444L30.0664 437.444Z" fill={clickedRooms.includes('room13') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room13')} />
          <path d="M30.0664 437.444L30.0664 453.402L4.83847 453.402L4.83847 437.444L30.0664 437.444Z" stroke="black" />
          <path id="room14" className="room" d="M30.0664 417.324L30.0664 437.444L4.83847 437.444L4.83848 417.324L30.0664 417.324Z" fill={clickedRooms.includes('room14') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room14')} />
          <path d="M30.0664 417.324L30.0664 437.444L4.83847 437.444L4.83848 417.324L30.0664 417.324Z" stroke="black" />
          <path id="room15" className="room" d="M33.522 371.88L33.522 417.324L4.83815 417.324L4.83816 371.88L33.522 371.88Z" fill={clickedRooms.includes('room15') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room15')} />
          <path d="M33.522 371.88L33.522 417.324L4.83815 417.324L4.83816 371.88L33.522 371.88Z" stroke="black" />
          <path id="room16" className="room" d="M33.522 327.129L33.522 371.88L4.83815 371.88L4.83816 327.129L33.522 327.129Z" fill={clickedRooms.includes('room16') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room16')} />
          <path d="M33.522 327.129L33.522 371.88L4.83815 371.88L4.83816 327.129L33.522 327.129Z" stroke="black" />
          <path id="room17" className="room" d="M61.1689 66.2583L61.1689 42.6689L40.0881 42.6689L40.0881 66.2583L61.1689 66.2583Z" fill={clickedRooms.includes('room17') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room17')} />
          <path d="M61.1689 66.2583L61.1689 42.6689L40.0881 42.6689L40.0881 66.2583L61.1689 66.2583Z" stroke="black" />
          <path id="room18" className="room" d="M61.1689 122.803L61.1689 146.393L40.0881 146.393L40.0881 122.803L61.1689 122.803Z" fill={clickedRooms.includes('room18') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room18')} />
          <path d="M61.1689 122.803L61.1689 146.393L40.0881 146.393L40.0881 122.803L61.1689 122.803Z" stroke="black" />
          <path id="room19" className="room" d="M61.1689 122.803L61.1689 66.2583L40.0881 66.2583L40.0881 122.803L61.1689 122.803Z" fill={clickedRooms.includes('room19') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room19')} />
          <path d="M61.1689 122.803L61.1689 66.2583L40.0881 66.2583L40.0881 122.803L61.1689 122.803Z" stroke="black" />
          <path id="room20" className="room" d="M140.654 144.658L140.654 183.165L79.1396 183.165L79.1396 144.658L140.654 144.658Z" fill={clickedRooms.includes('room20') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room20')} />
          <path d="M140.654 144.658L140.654 183.165L79.1396 183.165L79.1396 144.658L140.654 144.658Z" stroke="black" />
          <path id="room21" className="room" d="M140.654 285.501L140.654 319.844L77.4117 319.844L77.4117 285.501L140.654 285.501Z" fill={clickedRooms.includes('room21') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room21')} />
          <path d="M140.654 285.501L140.654 319.844L77.4117 319.844L77.4117 285.501L140.654 285.501Z" stroke="black" />
          <path id="room22" className="room" d="M140.654 419.058L140.654 455.136L77.4117 455.136L77.4117 419.058L140.654 419.058Z" fill={clickedRooms.includes('room22') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room22')} />
          <path d="M140.654 419.058L140.654 455.136L77.4117 455.136L77.4117 419.058L140.654 419.058Z" stroke="black" />
          <path id="room23" className="room" d="M58.4043 326.435L58.4043 314.988L40.0881 314.988L40.0881 326.435L58.4043 326.435Z" fill={clickedRooms.includes('room23') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room23')} />
          <path d="M58.4043 326.435L58.4043 314.988L40.0881 314.988L40.0881 326.435L58.4043 326.435Z" stroke="black" />
          <path id="room24" className="room" d="M58.4043 340.311L58.4043 326.435L40.0881 326.435L40.0881 340.311L58.4043 340.311Z" fill={clickedRooms.includes('room24') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room24')} />
          <path d="M58.4043 340.311L58.4043 326.435L40.0881 326.435L40.0881 340.311L58.4043 340.311Z" stroke="black" />
          <path id="room25" className="room" d="M60.478 354.188L60.478 340.312L40.0883 340.312L40.0883 354.188L60.478 354.188Z" fill={clickedRooms.includes('room25') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room25')} />
          <path d="M60.478 354.188L60.478 340.312L40.0883 340.312L40.0883 354.188L60.478 354.188Z" stroke="black" />
          <path id="room26" className="room" d="M60.478 404.141L60.478 354.188L40.0883 354.187L40.0883 404.141L60.478 404.141Z" fill={clickedRooms.includes('room26') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room26')} />
          <path d="M60.478 404.141L60.478 354.188L40.0883 354.187L40.0883 404.141L60.478 404.141Z" stroke="black" />
          <path id="room27" className="room" d="M58.4043 418.018L58.4043 404.142L40.0881 404.142L40.0881 418.018L58.4043 418.018Z" fill={clickedRooms.includes('room27') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room27')} />
          <path d="M58.4043 418.018L58.4043 404.142L40.0881 404.142L40.0881 418.018L58.4043 418.018Z" stroke="black" />
          <path id="room28" className="room" d="M55.2939 431.547L55.2939 418.018L40.0881 418.018L40.0881 431.547L55.2939 431.547Z" fill={clickedRooms.includes('room28') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room28')} />
          <path d="M55.2939 431.547L55.2939 418.018L40.0881 418.018L40.0881 431.547L55.2939 431.547Z" stroke="black" />
          <path id="room29" className="room" d="M59.7866 431.547L59.7866 418.018L55.294 418.018L55.294 431.547L59.7866 431.547Z" fill={clickedRooms.includes('room29') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room29')} />
          <path d="M59.7866 431.547L59.7866 418.018L55.294 418.018L55.294 431.547L59.7866 431.547Z" stroke="black" />
          <path id="room30" className="room" d="M59.7866 454.096L59.7866 437.444L55.294 437.444L55.294 454.096L59.7866 454.096Z" fill={clickedRooms.includes('room30') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room30')} />
          <path d="M59.7866 454.096L59.7866 437.444L55.294 437.444L55.294 454.096L59.7866 454.096Z" stroke="black" />
          <path id="room31" className="room" d="M58.4043 475.257L58.4043 454.096L40.0881 454.096L40.0881 475.257L58.4043 475.257Z" fill={clickedRooms.includes('room31') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room31')} />
          <path d="M58.4043 475.257L58.4043 454.096L40.0881 454.096L40.0881 475.257L58.4043 475.257Z" stroke="black" />
          <path id="room32" className="room" d="M58.4043 490.867L58.4043 475.257L40.0881 475.257L40.0881 490.867L58.4043 490.867Z" fill={clickedRooms.includes('room32') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room32')} />
          <path d="M58.4043 490.867L58.4043 475.257L40.0881 475.257L40.0881 490.867L58.4043 490.867Z" stroke="black" />
          <path id="room33" className="room" d="M58.4043 528.68L58.4043 490.867L40.0881 490.867L40.0881 528.68L58.4043 528.68Z" fill={clickedRooms.includes('room33') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room33')} />
          <path d="M58.4043 528.68L58.4043 490.867L40.0881 490.867L40.0881 528.68L58.4043 528.68Z" stroke="black" />
          <path id="room34" className="room" d="M60.3052 263.82L60.3052 198.602L40.2611 198.602L40.2611 263.82L60.3052 263.82Z" fill={clickedRooms.includes('room34') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room34')} />
          <path d="M60.3052 263.82L60.3052 198.602L40.2611 198.602L40.2611 263.82L60.3052 263.82Z" stroke="black" />
          <path id="room35" className="room" d="M58.2314 264.166L58.2314 278.736L40.2609 278.736L40.2609 264.166L58.2314 264.166Z" fill={clickedRooms.includes('room35') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room35')} />
          <path d="M58.2314 264.166L58.2314 278.736L40.2609 278.736L40.2609 264.166L58.2314 264.166Z" stroke="black" />
          <path id="room36" className="room" d="M58.4043 278.91L58.4043 287.582L40.0881 287.582L40.0881 278.91L58.4043 278.91Z" fill={clickedRooms.includes('room36') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room36')} />
          <path d="M58.4043 278.91L58.4043 287.582L40.0881 287.582L40.0881 278.91L58.4043 278.91Z" stroke="black" />
          <path id="room37" className="room" d="M60.3052 184.032L60.3052 198.255L40.2611 198.255L40.2611 184.032L60.3052 184.032Z" fill={clickedRooms.includes('room37') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room37')} />
          <path d="M60.3052 184.032L60.3052 198.255L40.2611 198.255L40.2611 184.032L60.3052 184.032Z" stroke="black" />
          <path id="room38" className="room" d="M56.5039 169.462L56.5039 183.685L40.2613 183.685L40.2613 169.462L56.5039 169.462Z" fill={clickedRooms.includes('room38') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room38')} />
          <path d="M56.5039 169.462L56.5039 183.685L40.2613 183.685L40.2613 169.462L56.5039 169.462Z" stroke="black" />
          <path id="room39" className="room" d="M58.4043 297.642L58.4043 287.582L47.3455 287.582L47.3455 297.642L58.4043 297.642Z" fill={clickedRooms.includes('room39') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room39')} />
          <path d="M58.4043 297.642L58.4043 287.582L47.3455 287.582L47.3455 297.642L58.4043 297.642Z" stroke="black" />
          <path id="room40" className="room" d="M47.3457 297.642L47.3457 287.582L40.0884 287.582L40.0884 297.642L47.3457 297.642Z" fill={clickedRooms.includes('room40') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room40')} />
          <path d="M47.3457 297.642L47.3457 287.582L40.0884 287.582L40.0884 297.642L47.3457 297.642Z" stroke="black" />
          <path id="room41" className="room" d="M61.1689 585.919L61.1689 571.696L41.1248 571.696L41.1248 585.919L61.1689 585.919Z" fill={clickedRooms.includes('room41') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room41')} />
          <path d="M61.1689 585.919L61.1689 571.696L41.1248 571.696L41.1248 585.919L61.1689 585.919Z" stroke="black" />
          <path id="room42" className="room" d="M137.544 588L137.544 567.186L117.5 567.186L117.5 588L137.544 588Z" fill={clickedRooms.includes('room42') ? 'lightgreen' : 'white'} onClick={() => handleRoomClick('room42')} />
          <path d="M137.544 588L137.544 567.186L117.5 567.186L117.5 588L137.544 588Z" stroke="black" />
        </g>
        <defs>
          <clipPath id="clip0_81_643">
            <rect width="588" height="141" fill="white" transform="translate(141) rotate(90)" />
          </clipPath>
        </defs>
      </svg>
      <div className="progress-container">
        <ProgressBar progress={progress} />
        <button className="next-button" onClick={() => navigate('/summary')}>SUIVANT</button>
      </div>
    </div>
  );
};


export default DetailedAnalysis;

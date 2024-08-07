import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { resetNotify } from '../../../redux/slices/notifySlice';
import './notify.css';

const AUTO_CLOSE_DURATION = 5000;

export default function Notify(): JSX.Element {
  const notify = useAppSelector((store) => store.notify);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (notify.type) {
      const timer = setTimeout(() => {
        dispatch(resetNotify());
      }, AUTO_CLOSE_DURATION);

      return () => clearTimeout(timer);
    }
  }, [notify, dispatch]);

  const handleClose = (): void => {
    dispatch(resetNotify());
  };

  return (
    <div className="notify">
      {notify.type && (
        <div
          className={`notify__message ${
            notify.type === 'error'
              ? 'notify__message--error'
              : 'notify__message--success'
          }`}
        >
          <span>{notify.message}</span>
          <button
            type="button"
            onClick={handleClose}
            className="notify__closeButton"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

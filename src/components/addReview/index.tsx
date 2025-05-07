'use client';

import { useState } from 'react';
// import { Star } from 'lucide-react';

export default function AddReviewPage() {
  const [name, setName] = useState('');
//   const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, comment });
  };

  return (
    <div className="relative min-h-screen bg-[#FFF3EE] flex items-center justify-center px-4 py-10 overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -left-10 w-96 h-96 bg-[#fca78c] opacity-30 blur-[100px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fca78c] opacity-20 blur-[120px] rounded-full z-0 animate-ping" />
      <div className="absolute top-32 left-20 w-32 h-32 border-2 border-[#fca78c] rounded-full opacity-20 z-0" />
      <div className="absolute bottom-28 left-24 w-20 h-20 bg-[#fca78c] rounded-xl rotate-12 opacity-20 z-0" />

      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl">
        <h1 className="text-4xl font-bold text-center text-[#1C1C1C] mb-8">
          Leave Your <span className="text-orange-500">Review</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-black mb-2">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience..."
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-xl text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
              required
            />
          </div>
          {/* <div>
            <label className="block text-sm  font-semibold text-black mb-2">Rating</label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="text-orange-400 hover:scale-110 transition-transform"
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >
                  <Star
                    fill={star <= rating ? '#fb923c' : 'none'}
                    stroke="#fb923c"
                    className="w-8 h-8"
                  />
                </button>
              ))}
            </div>
          </div> */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-400 to-purple-500 text-white text-lg font-semibold hover:opacity-90 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

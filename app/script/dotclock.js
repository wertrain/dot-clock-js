$(function(){
  let clock = $('#clock');
  let digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');
  let digits = {};
  let positions = [
    'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
  ];
  let digit_holder = clock.find('.digits');
  $.each(positions, function() {
    if(this == ':') {
      digit_holder.append('<div class="dots">');
    } else {
      let pos = $('<div>');
      for(let i = 1; i < 8; ++i) {
        pos.append('<span class="d' + i + '">');
        pos.append('<span class="d' + i + 'b">');
      }
      digits[this] = pos;
      digit_holder.append(pos);
    }
  });

  (function update_time() {
    let now = moment().format("hhmmssdA");
    digits.h1.attr('class', digit_to_name[now[0]]);
    digits.h2.attr('class', digit_to_name[now[1]]);
    digits.m1.attr('class', digit_to_name[now[2]]);
    digits.m2.attr('class', digit_to_name[now[3]]);
    digits.s1.attr('class', digit_to_name[now[4]]);
    digits.s2.attr('class', digit_to_name[now[5]]);

    let dow = now[6];
    dow--;

    // Schedule this function to be run again in 1 sec
    setTimeout(update_time, 1000);
  })();
});

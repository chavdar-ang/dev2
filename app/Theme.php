<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Likable;
use App\Traits\Commentable;
use Spatie\Activitylog\Traits\LogsActivity;

class Theme extends Model
{
	use SoftDeletes;
	use Likable;
	use Commentable;
    use LogsActivity;

	protected $dates = ['deleted_at'];
    
    protected $fillable = [
        'company_id', 'category_id', 'title', 'excerpt', 'body', 'cover', 'duration',
    ];

    protected $appends = ['only_like_count', 'only_comment_count'];

    public function company()
    {
    	return $this->belongsTo('App\Company');
    }

    public function events()
    {
    	return $this->hasMany('App\Event');
    }

    public function getCoverAttribute($value)
    {
    	return $this->attributes['cover'] = (!empty($value)) ? $value : 'default_cover.png';
    }

    
}

<x-mail::message>
# Introduction

<x-mail::panel>
    **Name:** {{ $data['name'] }}<br>
    **Email:** {{ $data['email'] }}<br>
</x-mail::panel>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>

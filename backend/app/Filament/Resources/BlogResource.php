<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\Blog;
use Filament\Tables;
use Filament\Forms\Set;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\Facades\Storage;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Tables\Columns\SelectColumn;
use Illuminate\Database\Eloquent\Builder;
use Filament\Infolists\Components\ImageEntry;
use App\Filament\Resources\BlogResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use App\Filament\Resources\BlogResource\RelationManagers;

class BlogResource extends Resource
{
    protected static ?string $model = Blog::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required()
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state))),
                TextInput::make('slug'),
                TextInput::make('author')->required(),
                RichEditor::make('content')->required(),
                FileUpload::make('image')
                ->label('Image')
                ->image()
                ->disk('public')
                ->directory('images/blogs')
                ->getUploadedFileNameForStorageUsing(fn ($file) => (string) Str::uuid() . '.' . $file->getClientOriginalExtension())
                ->storeFileNamesIn('uploaded_image_path'),
                Select::make('status')
                    ->options([
                        1 => 'Active',
                        0 => 'Block',
                    ]),
            ]);
    }


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title'),
                TextColumn::make('author'),
                SelectColumn::make('status')
                            ->options([
                                0 => 'Block',
                                1 => 'Active',
                            ])
                            ->selectablePlaceholder(false),
                TextColumn::make('content')
                            ->html()
                            ->words(5),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogs::route('/'),
            'create' => Pages\CreateBlog::route('/create'),
            'edit' => Pages\EditBlog::route('/{record}/edit'),
        ];
    }

    public static function saved($record): void
    {

        if ($uploadedPath = $record->uploaded_image_path) {
            // Delete existing image if any
            if ($record->image) {
                Storage::delete($record->image->path);
                $record->image->delete();
            }

            // Create a new image record and associate it with the blog
            $record->image()->create([
                'url' => $uploadedPath,
            ]);

            // Clear the temporary field
            $record->uploaded_image_path = null;
            $record->save();
        }
    }

}

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      entries: {
        Row: {
          entry_archive: boolean;
          entry_description: string | null;
          entry_id: string;
          entry_like: boolean;
          entry_medium: string | null;
          entry_name: string;
          entry_notes: Json | null;
          entry_rating: number;
          entry_status: string | null;
          entry_time: Json;
          entry_visible: boolean;
          entry_volumes: Json[];
          user_id: string;
        };
        Insert: {
          entry_archive: boolean;
          entry_description?: string | null;
          entry_id?: string;
          entry_like: boolean;
          entry_medium?: string | null;
          entry_name: string;
          entry_notes?: Json | null;
          entry_rating: number;
          entry_status?: string | null;
          entry_time: Json;
          entry_visible: boolean;
          entry_volumes: Json[];
          user_id: string;
        };
        Update: {
          entry_archive?: boolean;
          entry_description?: string | null;
          entry_id?: string;
          entry_like?: boolean;
          entry_medium?: string | null;
          entry_name?: string;
          entry_notes?: Json | null;
          entry_rating?: number;
          entry_status?: string | null;
          entry_time?: Json;
          entry_visible?: boolean;
          entry_volumes?: Json[];
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "entries_entry_medium_fkey";
            columns: ["entry_medium"];
            isOneToOne: false;
            referencedRelation: "mediums";
            referencedColumns: ["medium_id"];
          },
          {
            foreignKeyName: "entries_entry_status_fkey";
            columns: ["entry_status"];
            isOneToOne: false;
            referencedRelation: "statuses";
            referencedColumns: ["status_id"];
          },
          {
            foreignKeyName: "entries_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      genres: {
        Row: {
          genre_id: string;
          genre_name: string;
          genre_time: Json;
          user_id: string;
        };
        Insert: {
          genre_id?: string;
          genre_name: string;
          genre_time: Json;
          user_id: string;
        };
        Update: {
          genre_id?: string;
          genre_name?: string;
          genre_time?: Json;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "genres_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      genres_entries: {
        Row: {
          entry_id: string;
          genre_id: string;
          user_id: string;
        };
        Insert: {
          entry_id: string;
          genre_id: string;
          user_id: string;
        };
        Update: {
          entry_id?: string;
          genre_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "genres_entries_entry_id_fkey";
            columns: ["entry_id"];
            isOneToOne: false;
            referencedRelation: "entries";
            referencedColumns: ["entry_id"];
          },
          {
            foreignKeyName: "genres_entries_genre_id_fkey";
            columns: ["genre_id"];
            isOneToOne: false;
            referencedRelation: "genres";
            referencedColumns: ["genre_id"];
          },
          {
            foreignKeyName: "genres_entries_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      lists: {
        Row: {
          list_id: string;
          list_name: string;
          list_time: Json;
          user_id: string;
        };
        Insert: {
          list_id?: string;
          list_name: string;
          list_time: Json;
          user_id: string;
        };
        Update: {
          list_id?: string;
          list_name?: string;
          list_time?: Json;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "lists_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      lists_entries: {
        Row: {
          entry_id: string;
          list_id: string;
          user_id: string;
        };
        Insert: {
          entry_id: string;
          list_id: string;
          user_id: string;
        };
        Update: {
          entry_id?: string;
          list_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "lists_entries_entry_id_fkey";
            columns: ["entry_id"];
            isOneToOne: false;
            referencedRelation: "entries";
            referencedColumns: ["entry_id"];
          },
          {
            foreignKeyName: "lists_entries_list_id_fkey";
            columns: ["list_id"];
            isOneToOne: false;
            referencedRelation: "lists";
            referencedColumns: ["list_id"];
          },
          {
            foreignKeyName: "lists_entries_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      mediums: {
        Row: {
          medium_id: string;
          medium_name: string;
          medium_time: Json;
          user_id: string;
        };
        Insert: {
          medium_id?: string;
          medium_name: string;
          medium_time: Json;
          user_id: string;
        };
        Update: {
          medium_id?: string;
          medium_name?: string;
          medium_time?: Json;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "mediums_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      statuses: {
        Row: {
          status_id: string;
          status_name: string;
          status_time: Json;
          user_id: string;
        };
        Insert: {
          status_id?: string;
          status_name: string;
          status_time: Json;
          user_id: string;
        };
        Update: {
          status_id?: string;
          status_name?: string;
          status_time?: Json;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "statuses_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      tags: {
        Row: {
          tag_id: string;
          tag_name: string;
          tag_time: Json;
          user_id: string;
        };
        Insert: {
          tag_id?: string;
          tag_name: string;
          tag_time: Json;
          user_id: string;
        };
        Update: {
          tag_id?: string;
          tag_name?: string;
          tag_time?: Json;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "tags_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      tags_entries: {
        Row: {
          entry_id: string;
          tag_id: string;
          user_id: string;
        };
        Insert: {
          entry_id: string;
          tag_id: string;
          user_id: string;
        };
        Update: {
          entry_id?: string;
          tag_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "tags_entries_entry_id_fkey";
            columns: ["entry_id"];
            isOneToOne: false;
            referencedRelation: "entries";
            referencedColumns: ["entry_id"];
          },
          {
            foreignKeyName: "tags_entries_tag_id_fkey";
            columns: ["tag_id"];
            isOneToOne: false;
            referencedRelation: "tags";
            referencedColumns: ["tag_id"];
          },
          {
            foreignKeyName: "tags_entries_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof Database["public"]["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never;
